import {
  __commonJS
} from "./chunk-5WRI5ZAA.js";

// node_modules/refractor/lang/wasm.js
var require_wasm = __commonJS({
  "node_modules/refractor/lang/wasm.js"(exports, module) {
    module.exports = wasm;
    wasm.displayName = "wasm";
    wasm.aliases = [];
    function wasm(Prism) {
      Prism.languages.wasm = {
        comment: [
          /\(;[\s\S]*?;\)/,
          {
            pattern: /;;.*/,
            greedy: true
          }
        ],
        string: {
          pattern: /"(?:\\[\s\S]|[^"\\])*"/,
          greedy: true
        },
        keyword: [
          {
            pattern: /\b(?:align|offset)=/,
            inside: {
              operator: /=/
            }
          },
          {
            pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
            inside: {
              punctuation: /\./
            }
          },
          /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/
        ],
        variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
        number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
        punctuation: /[()]/
      };
    }
  }
});

export {
  require_wasm
};
//# sourceMappingURL=chunk-L6G26O3L.js.map
