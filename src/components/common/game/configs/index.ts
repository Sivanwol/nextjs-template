import SkillMapConfig from "./SkillMapConfig";

export function fetchConfig(name: string) {
  if (name === "skillmap") {
    return SkillMapConfig;
  }
}
