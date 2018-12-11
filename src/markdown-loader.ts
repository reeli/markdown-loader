import { getOptions } from "loader-utils";
import marked from "marked";

export default function loader(source: any) {
    return marked(source);
}
