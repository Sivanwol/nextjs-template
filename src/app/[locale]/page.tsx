import AboutMeHP from "@app/components/segments/homepage/aboutMe";
import ContactHP from "@app/components/segments/homepage/contact";
import MySkillsHP from "@app/components/segments/homepage/mySkills";
import SkillsMap from "@app/components/segments/homepage/skillMap";
export default function Homepage() {
  return (
    <>
      <AboutMeHP />
      <MySkillsHP />
      <SkillsMap />
      <ContactHP />
    </>
  );
}
