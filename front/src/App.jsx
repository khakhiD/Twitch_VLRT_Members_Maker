import vlrtLogo from "/images/logo/logo-val.svg";
import twitchLogo from "/images/logo/logo-twitch.svg";
import Members from './components/Members/Members';
import "./App.css";

function App() {
  function getTodayDate() {
    return new Date().toLocaleDateString('ko-kr');
  }

  return (
    <>
      <div>
        <img src={twitchLogo} className="logo twitch" alt="Twitch logo" />
        <img src={vlrtLogo} className="logo" alt="Valorant logo" />
      </div>
      <div>
        <h1 id="text1" className="gradientText">트위치 발로란트 내전 카드 생성기</h1>
      </div>
      <div className="card">
        <Members todayDate={getTodayDate}/>
        <p>카드 생성 버튼을 눌러 위와 같은 카드를 만들 수 있습니다.</p>
        <button>카드 생성하기</button>
      </div>
      <p className="copyright">
        Copyright ⓒ 2023{" "}
        <a href="https://github.com/khakhid">
          khakid
        </a>{" "}
        Allright reserved.
      </p>
    </>
  );
}

export default App;
