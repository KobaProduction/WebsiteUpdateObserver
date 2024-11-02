import dotenv from "dotenv";

dotenv.config()

class EnvConfigs {
    readonly PORT = process.env.PORT || 9875;
    readonly RESOURCES_DIR = process.env.RESOURCES_DIR || "resources";
    readonly SITES_DATABASE_DIR = process.env.SITES_CONFIG_FILE || "sites-database";
    readonly SITES_CONFIG_FILE = process.env.SITES_CONFIG_FILE || "sites-config.json";
}

export const env = new EnvConfigs();