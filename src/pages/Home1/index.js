import React from "react";

import {
  Stack,
  Row,
  List,
  Column,
  Img,
  Line,
  Text,
  SelectBox,
} from "components";
import {
  postToken,
  getTrackslimit5,
  getRecommendationslimit20seedgenressadmarketINminpopularity10,
} from "service/api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import * as timeRange from "constants/timeRange";
import * as mood from "constants/mood";

const Home1Page = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
 
  
  }, []);
  const [apiData1, setapiData1] = React.useState();
  const [apiData2, setapiData2] = React.useState();
  const [apiData3, setapiData3] = React.useState();
  const [imgBig, setImgBig] = React.useState('images/img_smilingfacewi.png');

  function callApi() {
    const req = {
      data: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: "{refresh_token}",
      }),
    };
    postToken(req)
      .then((res) => {
        setapiData(res);

        localStorage.setItem("accessToken", JSON.stringify(res?.access_token));
        callApi1();
        callApi2();
      })
      .catch((err) => {
        console.error(err);
        toast.error("auth Error");
      });
  }
  function callApi1(rang = timeRange.long_term) {
    const req = {
      headers: {
        Authorization:"Bearer "+ JSON.parse(localStorage.getItem("accessToken")),
      },
      params: { time_range: rang},
    };
    getTrackslimit5(req)
      .then((res) => {
        setapiData1(res);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error In Top List");
      });
  }
  function callApi2() {
    const req = {
      headers: {
        Authorization: "Bearer "+JSON.parse(localStorage.getItem("accessToken")),
      },
      params: { seed_genres: mood.HEART_EYE.HEART_EYE },
    };
    getRecommendationslimit20seedgenressadmarketINminpopularity10(req)
      .then((res) => {
        setapiData3(res?.tracks[0]);

        localStorage.setItem("moodTracksOnInit", JSON.stringify(res?.tracks));
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi3(mood) {
    const req = {
      headers: {
        Authorization:"Bearer "+ JSON.parse(localStorage.getItem("accessToken")),
      },
      params: { seed_genres: mood.mood },
    };
    getRecommendationslimit20seedgenressadmarketINminpopularity10(req)
      .then((res) => {
        let track = res?.tracks[Math.floor(Math.random()*res?.tracks.length)];
        setapiData3(track);
        setImgBig(mood.EMOJI);
        toast.success("Wow! Wonderful track for your mood..!!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Auth Error");
      });
  }
  function handleNavigate1(url) {
    const win = window.open(
      "https://open.spotify.com/track/5W8YXBz9MTIDyrpYaCg2Ky",
      "_blank"
    );
    win.focus();
  }
  function handleNavigate2(url) {
    const win = window.open(
      "https://open.spotify.com/artist/4RddZ3iHvSpGV4dvATac9X",
      "_blank"
    );
    win.focus();
  }
  function handleNavigate3(url) {
    const win = window.open(
     url,
      "_blank"
    );
    win.focus();
  }
  function handleNavigate4(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }
  function handleNavigate5(url) {
    window.location.href =url;
  }
  function handleNavigate6(url) {
    const win = window.open(
     url,
      "_blank"
    );
    win.focus();
  }
  function handleNavigate7(url) {
    const win = window.open(
     url,
      "_blank"
    );
    win.focus();
  }
  function millisToMinutesAndSeconds (millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
    //ES6 interpolated literals/template literals 
      //If seconds is less than 10 put a zero in front.
      return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
  }

  return (
    <>
      <Stack className="bg-white_A700 font-gilroy h-[1080px] 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] mx-[auto] w-[100%]">
        <div className="absolute bg-gradient  h-[1190px] 2xl:h-[1091px] 3xl:h-[1309px] lg:h-[948px] xl:h-[970px] rounded-radius8 w-[100%]"></div>
        <Row className="absolute bottom-[0] justify-evenly w-[100%]">
          <List
            className="gap-[0] lg:mb-[64px] xl:mb-[73px] mb-[83px] 3xl:mb-[99px] min-h-[auto] w-[7%]"
            orientation="vertical"
          >
            <Column className="bg-gradient1  items-center justify-center my-[0] lg:p-[25px] xl:p-[29px] p-[33px] 3xl:p-[39px] rounded-radius8 w-[100%]">
             {mood.moods?.map((m) => {
                  return (
                    <>
              <Img
                src={m.EMOJI}
                className="common-pointer lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[100%]"
                onClick={() => {
                  callApi3(m);
                }}
                alt="GrinningFace"
              />
              {/* <div className="backdrop-opacity-[0.5] bg-deep_orange_300 blur-[9.00px] lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[4px] rounded-radius5 w-[31%]"></div> */}
              <Line className="bg-deep_orange_200 h-[1px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[91%]" />
              </> 
              )})}
              </Column>
          </List>
          <Column className="items-center lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] w-[93%]">
            <Column className="w-[91%]">
             
              <Row className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
              <Text className="font-bold ml-4 lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-purple_400 w-[50]">
                Mood Wise Tracks
              </Text>
                <Img
                  src={apiData3?.album?.images[0]?.url}
                  className="common-pointer lg:h-[144px] pr-4 xl:h-[164px] h-[184px] 2xl:h-[185px] 3xl:h-[221px] rounded-radius6 lg:w-[143px] xl:w-[163px] w-[184px] 3xl:w-[220px]"
                  onClick={() => {handleNavigate7(apiData3?.external_urls?.spotify)}}
                  alt="Rectangle21"
                />
                <Column className="lg:pr-[384px] xl:pr-[439px] pr-[494px] 3xl:pr-[593px] w-[69%]">
                  <Text
                    className="common-pointer font-bold lg:leading-[30px] xl:leading-[34px] leading-[39.00px] 2xl:leading-[39px] 3xl:leading-[46px] lg:text-[26px] xl:text-[30px] text-[34px] 3xl:text-[40px] text-black_900 w-[100%]"
                    onClick={() => {handleNavigate6(apiData3?.external_urls?.spotify)}}
                  >
                    {apiData3?.name} 
                    <br />
                    <Text
                    className="common-pointer font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-blue_900_87 w-[auto]" > 
                    {apiData3?.artists.map(function(item) { let i =  item.name; return i; }).toString()} </Text>
                  </Text>
                  <Text
                    className="common-pointer font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-black_900_87 w-[auto]"
                    onClick={() => {handleNavigate5(apiData3?.album?.external_urls?.spotify)}}
                  >
                    {apiData3?.album?.name}
                  </Text>
                </Column>
                <Stack className="lg:h-[101px] xl:h-[115px] h-[129px] 2xl:h-[130px] 3xl:h-[155px] lg:w-[100px] xl:w-[114px] w-[129px] 3xl:w-[154px]">
                  <Img
                    src={imgBig}
                    className="absolute mt-6 mr-5 lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] inset-[0] justify-center m-[27px] w-[65%]"
                    alt="GrinningFace"
                  />
                  <div className="absolute border border-red_200 border-solid lg:h-[101px] xl:h-[115px] h-[129px] 2xl:h-[130px] 3xl:h-[155px] rounded-radius50 shadow-bs lg:w-[100px] xl:w-[114px] w-[129px] 3xl:w-[154px]"></div>
                </Stack>
              </Row>
            </Column>
            <Stack className="lg:h-[619px] xl:h-[708px] h-[795px] 2xl:h-[796px] 3xl:h-[955px] lg:mt-[59px] xl:mt-[68px] mt-[77px] 3xl:mt-[92px] w-[100%]">
              <div className="absolute bg-gradient h-[702px] rounded-radius8 shadow-bs1 top-[0] w-[100%]"></div>
              <Column className="absolute h-[max-content] inset-[0] justify-center m-[auto] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] w-[93%]">
                <SelectBox
                  className="bg-purple_400_19 font-semibold mr-[1041px] 3xl:mr-[1249px] lg:mr-[809px] xl:mr-[926px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius8 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-purple_400 w-[14%]"
                  placeholderClassName="bg-transparent text-purple_400"
                  name="Frame10044"
                  options={[
                    { value: "long_term", label: "Last 6 Months" },
                    { value: "medium_term", label: "Last 4 Months" },
                    { value: "short_term", label: "Last Months" },
                  ]}
                  placeholder="Last 6 Months"
                  onChange = {(e)=> {callApi1(e) }}
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_vector.png"
                      className="w-[10.54px] h-[6.25px] mr-[16px] lg:w-[8px] lg:h-[5px] lg:mr-[12px] xl:w-[9px] xl:h-[6px] xl:mr-[14px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[19px]"
                      alt="Vector"
                    />
                  }
                >

                </SelectBox>
                <Row className="items-center lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] lg:mr-[61px] xl:mr-[70px] mr-[79px] 3xl:mr-[94px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[92%]">
                  <Text className="flex font-semibold lg:h-[23px] xl:h-[26px] h-[29px] 2xl:h-[30px] 3xl:h-[35px] items-center lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_901 w-[20px]">
                    No.
                  </Text>
                  <Text className="font-semibold lg:ml-[50px] xl:ml-[57px] ml-[65px] 3xl:ml-[78px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_901 w-[180px] text-center">
                    Song Title
                  </Text>
                  <Text className="font-semibold  ml-[158px]   lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_901 w-[144px]">
                    Album Name
                  </Text>
                  <Text className="font-semibold  ml-[70px]   lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_901 w-[80px]">
                    Artist
                  </Text>
                  <Text className="font-semibold  ml-[200px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_901 w-[65px]">
                    Duration
                  </Text>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[98%]"
                  orientation="vertical"
                >
                  {apiData1?.items?.map((apiData1ItemsEle, i) => {
                    return (
                      <Row className="items-center lg:my-[12px] xl:my-[14px] my-[16.5px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                        <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[20px]">
                          {i+1}
                        </Text>
                        <Img
                          src={apiData1ItemsEle?.album?.images[0]?.url}
                          className="common-pointer lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] lg:ml-[60px] xl:ml-[69px] ml-[78px] 3xl:ml-[93px] rounded-radius6 lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
                          onClick={() => {handleNavigate4(apiData1ItemsEle?.external_urls?.spotify)}}
                          alt="Rectangle20"
                        />
                        <Text className="font-medium content-end lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[180px]">
                          {apiData1ItemsEle?.name}
                        </Text>
                        <Text
                          className="common-pointer content-end font-normal lg:ml-[56px] xl:ml-[64px] ml-[73px] 3xl:ml-[87px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_902 w-[144px]"
                          onClick={() => {handleNavigate3(apiData1ItemsEle?.album?.external_urls?.spotify)}}
                        >
                          {apiData1ItemsEle?.album?.name}
                        </Text>
                        <Text
                          className="common-pointer font-normal lg:ml-[56px] xl:ml-[64px] ml-[73px] 3xl:ml-[87px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_902 w-[205px]"
                        >
                        {apiData1ItemsEle?.artists.map(function(item) {  let i =  item.name; return i; }).toString()} 
                        </Text>
                        <Text className="font-normal xl:ml-[102px] ml-[115px] 3xl:ml-[138px] lg:ml-[89px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_902 w-[70px]">
                          {millisToMinutesAndSeconds(apiData1ItemsEle?.duration_ms)}
                        </Text>
                        {/* <div
                          className="common-pointer bg-black_902 border-black_902 border-bw15 border-solid lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] xl:ml-[107px] ml-[121px] 3xl:ml-[145px] lg:ml-[94px] rotate-[90deg] rounded-radius75 w-[3px]"
                          onClick={handleNavigate1}
                        ></div> */}
                      </Row>
                    );
                  })}
                </List>
              </Column>
            </Stack>
                <b className="items-center justify-center">Made with ❤️ using DhiWise</b>
          </Column>
        </Row>
      </Stack>
      
      <ToastContainer />
    </>
  );
};

export default Home1Page;
