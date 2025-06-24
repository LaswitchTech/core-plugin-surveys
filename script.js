//
//   Core Framework - Script file
//
//   @license    MIT (https://mit-license.org/)
//   @author     Louis Ouellet <louis@laswitchtech.com>
//

// Create a survey
function process_function_SurveyCreate(task, value, callback = null){
    // Execute Callback
    if(typeof callback === "function"){
        callback(task, response);
    }
}
function process_meta_SurveyCreate(key = null){
    const metadata = {
        label: "Create a Survey",
        description: "Create a Survey from a Task",
        type: "none",
    };
    return metadata[key] ? metadata[key] : metadata;
}
