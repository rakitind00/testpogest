$(document).ready(function(){
  var code = $(".codemirror-textarea")[0];
  var editor = CodeMirror.fromTextArea(code, {
        lineNumbers: true,
        matchBrackets: true,
        mode: "text/x-csrc",
        theme: "midnight" // this css is nverted
  });
});
  
