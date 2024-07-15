import PageEffects from "@app/components/effects/pageEffects";
import AboutMeHP from "@app/components/segments/homepage/aboutMe";
import ContactHP from "@app/components/segments/homepage/contact";
import MySkillsHP from "@app/components/segments/homepage/mySkills";
export default function Homepage() {
  return (
    <>
      <AboutMeHP />
      <MySkillsHP />
      <ContactHP />
    </>
  );
}
