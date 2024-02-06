import { Grid } from "@mui/material";
import TableComp from "./component/MiniComp/TableComp";
import SignUp from "./component/SignUp/SignUpRightPage";
// import LoginPage from "./component/LoginPage";
import LoginPage from "./component/Login/LoginPage"
import SignUpRightPage from "./component/SignUp/SignUpRightPage";
import SignUpPage from "./component/SignUp/SignUpPage";
import Payment from "./component/Payment/Payment";
import PaymentRightPage from "./component/Payment/PaymentRightPage";
import PaymentMain from "./component/Payment/PaymentMain";
import History from "./component/History/History";
import SphNegative from "./component/Sph/SphNegative"
import CylPositive from "./component/Cyl/CylPositive";
import CylNegative from "./component/Cyl/CylNegative";
import Axis from "./component/Axis/Axis";
import Fill from "./component/Fill/Fill";
import AutoRefractionInp from "./component/AutoRefractionInp/AutoRefractionInp";
import AutoRefractionFill from "./component/Fill/AutoRefractionFill";
import VisionFill from "./component/Fill/VisionFill";
import { FirstUcva, SecondUcva } from "./component/VisualAcuity/SecondaryUcva";
import { UcvaMain } from "./component/VisualAcuity/UcvaMain";
import SignupTextField from "./component/SignUp/SignupTextField";
import SphPositive from "./component/Sph/SphPositive";
import { FourColLayout } from "./Refraction/PrimaryLayout";
import { VisualAcuityV3 } from "./Refraction/UiLayout";
import { Refraction } from "./RefractionComponent/Main";
import EyeTemplate from "./component/EyeTemplate/Main/Main";




function App() {



  return (
    <>
      {/* <SignUpPage /> */}
      {/* <LoginPage /> */}
      {/* <Payment /> */}
      {/* <PaymentRightPage/> */}
       {/* <PaymentMain /> */}
      {/* <History /> */}
      {/* <SphPositive /> done */}
      {/* <SphNegative /> done */}
      {/* <CylPositive /> done */}
      {/* <CylNegative /> done */}
      {/* <Axis done /> */}
      {/* <Fill />  */}
      {/* <AutoRefractionInp four col /> */}
      {/* <AutoRefractionFill /> */}
      {/* <VisionFill five col /> */}
      
      {/* <UcvaFirst /> */}
      {/* <UcvaSecond /> */}
      {/* <MainUcva /> */}
      {/* <FirstUcva /> */}
      {/* <UcvaMain /> */}
      {/* <SecondUcva /> */}
      {/* <FourColLayout /> */}
      {/* <VisualAcuityV3 /> */}
      {/* <Refraction /> */}
      <EyeTemplate />
      
      
    </>
  );
}

export default App;
