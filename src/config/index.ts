interface ConfigType {
  weatherApikey: string;
}
export const config: ConfigType = {
  weatherApikey: process.env.NEXT_PUBLIC_WEATHERAPP_API_KEY || "",
};
