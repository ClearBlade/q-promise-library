/**
 * This is a sample service to show how to use Q.defer() in the Q Promise library
 * http://documentup.com/kriskowal/q#the-beginning 
 * 
 */
function QExampleAsyncCall(req, resp){
    
    function requestPopulationData() {
        var request = Requests();
        var options = {
            "uri":"https://api.datausa.io/api/?show=geo&sumlevel=nation&required=pop",
        }
        var deferred = Q.defer();
     
        request.get(options, function(err,resp){
            if(err){
                //the error is a JSON value of the error in question, shaped like {"error":"message"}
                deferred.reject(new Error("Status code was " + JSON.stringify(err)));
            }else{
                //resp is JSON of the response
                deferred.resolve(resp);
            }
        } );
     
        return deferred.promise;
    }
    
    
    requestPopulationData()
        .then(function (value) {
                resp.success(value);
            }, function (reason) {
                resp.error("promise failed because: "+reason);
            }
        );
}