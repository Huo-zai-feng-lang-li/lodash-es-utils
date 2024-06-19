// index.d.ts
import * as lodashEs from "lodash-es";

export = lodashEs;

// 如果你的库在某种方式上修改了 lodash 或 lodash-es 的行为，你可以在这里扩展或修改类型定义。
// 例如，如果你添加了新的方法或属性，你可以这样做：
// declare module 'lodash' {
//     interface LoDashStatic {
//         // 假设你添加了一个新的方法:
//         newMethod(): void;
//     }
// }

// 如果没有修改，只需要重新导出即可。
