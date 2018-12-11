import { getOptions } from "loader-utils";

export default function loader(source: any) {
  // @ts-ignore
  const options = getOptions(this);
  source = source.replace(/\[name\]/gi, options.alias);
  return `export default ${JSON.stringify(source)}`;
}
