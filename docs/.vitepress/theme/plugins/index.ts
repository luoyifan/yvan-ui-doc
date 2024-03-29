import Callout from "./Callout";
import BeanSchemaCode from "./BeanSchemaCode";
import AssetsConvert from "./AssetsConvert";

export function applyPlugins(md: any) {
    md.use(Callout);
    md.use(BeanSchemaCode);
    md.use(AssetsConvert);
}