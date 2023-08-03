import { useState } from "react";
import styled from "styled-components";
import { MantineProvider, Switch, useMantineTheme, Group } from "@mantine/core";
import iconDown from "./assets/icon-down.svg";
import iconUp from "./assets/icon-up.svg";
import iconFaceboook from "./assets/icon-facebook.svg";
import iconInstagram from "./assets/icon-instagram.svg";
import iconTwitter from "./assets/icon-twitter.svg";
import iconYoutube from "./assets/icon-youtube.svg";

export default function App() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(true);

  console.log(checked);
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      // theme={{ colorScheme: "dark" }}
      theme={{
        colorScheme: checked ? "dark" : "light",
        colors: {
          dark: [
            "#ffffff",
            "#acaebf",
            "hsl(228, 28%, 20%)",
            "#666980",
            "#4d4f66",
            "#34354a",
            "hsl(230, 17%, 14%)",
            "#1d1e30",
            "#0c0d21",
            "#01010a",
          ],
        },
      }}
    >
      <div className="w-screen h-screen pt-12 px-36 font-Inter">
        <nav className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Social Media Dashboard</h1>
            <h2 className="font-semibold text-Desaturated-Blue">
              Total Followers: 23,004
            </h2>
          </div>
          <div className="flex flex-row items-center gap-2">
            <p className="text-Desaturated-Blue">Dark Mode</p>
            <Switch
              labelPosition="left"
              size="lg"
              // color="violet"
              color={theme.colorScheme === "dark" ? "violet" : "indigo"}
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
            />
          </div>
        </nav>
        <main>
          <div>
            <Group position="apart" grow spacing={44} mt={21}>
              <SocialMediaContainer id="facebook" color={checked}>
                <div className="flex items-center justify-center gap-2">
                  <img src={iconFaceboook} alt="icon" />
                  <p className="font-semibold text-Desaturated-Blue">
                    @nathanf
                  </p>
                </div>
                <div className="flex items-center justify-center flex-col -gap-5">
                  <h1 className="-mb-5">1987</h1>
                  <h2 className="mb-6 font-normal tracking-widest text-Desaturated-Blue">
                    FOLLOWERS
                  </h2>
                </div>{" "}
                <div className="flex items-center justify-center gap-2 text-Lime-Green font-semibold text-sm">
                  <img src={iconUp} alt="icon" />
                  <p>12 Today</p>
                </div>
              </SocialMediaContainer>
              <SocialMediaContainer id="twitter" color={checked}>
                <div className="flex items-center justify-center gap-2">
                  <img src={iconTwitter} alt="icon" />
                  <p className="font-semibold text-Desaturated-Blue">
                    @nathanf
                  </p>
                </div>
                <div className="flex items-center justify-center flex-col -gap-5">
                  <h1 className="-mb-5">1044</h1>
                  <h2 className="mb-6 font-normal tracking-widest text-Desaturated-Blue">
                    FOLLOWERS
                  </h2>
                </div>{" "}
                <div className="flex items-center justify-center gap-2 text-Lime-Green font-semibold text-sm">
                  <img src={iconUp} alt="icon" />
                  <p>99 Today</p>
                </div>
              </SocialMediaContainer>
              <SocialMediaContainer id="instagram" color={checked}>
                <div className="flex items-center justify-center gap-2">
                  <img src={iconInstagram} alt="icon" />
                  <p className="font-semibold text-Desaturated-Blue">
                    @nathanf
                  </p>
                </div>
                <div className="flex items-center justify-center flex-col -gap-5">
                  <h1 className="-mb-5">11K</h1>
                  <h2 className="mb-6 font-normal tracking-widest text-Desaturated-Blue">
                    FOLLOWERS
                  </h2>
                </div>{" "}
                <div className="flex items-center justify-center gap-2 text-Lime-Green font-semibold text-sm">
                  <img src={iconUp} alt="icon" />
                  <p>1099 Today</p>
                </div>
              </SocialMediaContainer>
              <SocialMediaContainer id="youtube" color={checked}>
                <div className="flex items-center justify-center gap-2">
                  <img src={iconYoutube} alt="icon" />
                  <p className="font-semibold text-Desaturated-Blue">
                    @nathanf
                  </p>
                </div>
                <div className="flex items-center justify-center flex-col -gap-5">
                  <h1 className="-mb-5">8239</h1>
                  <h2 className="mb-6 font-normal tracking-widest text-Desaturated-Blue">
                    FOLLOWERS
                  </h2>
                </div>{" "}
                <div className="flex items-center justify-center gap-2 text-Bright-Red font-semibold text-sm">
                  <img src={iconDown} alt="icon" />
                  <p>144 Today</p>
                </div>
              </SocialMediaContainer>
            </Group>
            <h1 className="py-12">Overview - Today</h1>
            <div className="grid grid-cols-4 gap-6">
              <Wrapper color={checked}>
                <Div>
                  <h2 className="text-Desaturated-Blue font-semibold text-base">
                    Page Views
                  </h2>
                  <img src={iconFaceboook} alt="" />
                </Div>
                <Div>
                  <h1>87</h1>
                  <span className="flex items-center gap-1 text-Lime-Green font-bold ml-12">
                    <img src={iconUp} alt="" />
                    <p>3%</p>
                  </span>
                </Div>
              </Wrapper>
              <Wrapper color={checked}>
                <Div>
                  <h2 className="text-Desaturated-Blue font-semibold text-base">
                    Likes
                  </h2>
                  <img src={iconFaceboook} alt="" />
                </Div>
                <Div>
                  <h1>52</h1>
                  <span className="flex items-center gap-1 text-Lime-Green font-bold ml-12">
                    <img src={iconUp} alt="" />
                    <p>2%</p>
                  </span>
                </Div>
              </Wrapper>
              <Wrapper color={checked}>
                <Div>
                  <h2 className="text-Desaturated-Blue font-semibold text-base">
                    Likes
                  </h2>
                  <img src={iconInstagram} alt="" />
                </Div>
                <Div>
                  <h1>5462</h1>
                  <span className="flex items-center gap-1 text-Lime-Green font-bold ml-12">
                    <img src={iconUp} alt="" />
                    <p>2257%</p>
                  </span>
                </Div>
              </Wrapper>
              <Wrapper color={checked}>
                <Div>
                  <h2 className="text-Desaturated-Blue font-semibold text-base">
                    Profile Views
                  </h2>
                  <img src={iconInstagram} alt="" />
                </Div>
                <Div>
                  <h1>52K</h1>
                  <span className="flex items-center gap-1 text-Lime-Green font-bold ml-12">
                    <img src={iconUp} alt="" />
                    <p>1375%</p>
                  </span>
                </Div>
              </Wrapper>
              <Wrapper color={checked}>
                <Div>
                  <h2 className="text-Desaturated-Blue font-semibold text-base">
                    Retweets
                  </h2>
                  <img src={iconTwitter} alt="" />
                </Div>
                <Div>
                  <h1>117</h1>
                  <span className="flex items-center gap-1 text-Lime-Green font-bold ml-12">
                    <img src={iconUp} alt="" />
                    <p>303%</p>
                  </span>
                </Div>
              </Wrapper>
              <Wrapper color={checked}>
                <Div>
                  <h2 className="text-Desaturated-Blue font-semibold text-base">
                    Likes
                  </h2>
                  <img src={iconTwitter} alt="" />
                </Div>
                <Div>
                  <h1>507</h1>
                  <span className="flex items-center gap-1 text-Lime-Green font-bold ml-12">
                    <img src={iconUp} alt="" />
                    <p>553%</p>
                  </span>
                </Div>
              </Wrapper>
              <Wrapper color={checked}>
                <Div>
                  <h2 className="text-Desaturated-Blue font-semibold text-base">
                    Likes
                  </h2>
                  <img src={iconYoutube} alt="" />
                </Div>
                <Div>
                  <h1>107</h1>
                  <span className="flex items-center gap-1 text-Bright-Red font-bold ml-12">
                    <img src={iconDown} alt="" />
                    <p>19%</p>
                  </span>
                </Div>
              </Wrapper>
              <Wrapper color={checked}>
                <Div>
                  <h2 className="text-Desaturated-Blue font-semibold text-base">
                    Total Views
                  </h2>
                  <img src={iconYoutube} alt="" />
                </Div>
                <Div>
                  <h1>1407</h1>
                  <span className="flex items-center gap-1 text-Bright-Red font-bold ml-12">
                    <img src={iconDown} alt="" />
                    <p>12%</p>
                  </span>
                </Div>
              </Wrapper>
            </div>
          </div>
        </main>
      </div>
    </MantineProvider>
  );
}
// hsl(228 28% 20%)
const SocialMediaContainer = styled.div`
  background-color: ${(props) =>
    props.color ? "hsl(228 28% 20%)" : "hsl(226, 31%, 86%)"};
  border-radius: 4px;
  text-align: center;
  padding-block: 12px;

  & h1 {
    font-size: 54.5px;
    font-weight: 600;
  }

  &:hover {
    background: hsl(228, 12%, 44%);
  }
`;

const Wrapper = styled.div`
  background: hsl(228 28% 20%);
  background-color: ${(props) =>
    props.color ? "hsl(228 28% 20%)" : "hsl(226, 31%, 86%)"};
  border-radius: 4px;
  padding-top: 24px;
  padding-bottom: 12px;
  margin-right: 14px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: 20px;
  margin-bottom: 6px;

  & h1 {
    font-weight: 600;
  }
`;
