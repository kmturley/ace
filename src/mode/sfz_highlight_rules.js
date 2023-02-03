define(function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

  var SfzHighlightRules = function () {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used
    this.$rules = {
      start: [
        {
          token : "constant.language.escape",
          regex : /\$[\w\d]+/
        }
      ],
    };
  };

  oop.inherits(SfzHighlightRules, TextHighlightRules);

  exports.SfzHighlightRules = SfzHighlightRules;
});
