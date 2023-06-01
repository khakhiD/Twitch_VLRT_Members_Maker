import classes from "./Members.module.css";

const Members = (props) => {
  return (
    <>
      <div className={classes.members}>
        <div className={classes.header}>
            <h2 className={classes.title}>오늘의 발낳대 스크림 내전</h2>
            <span className={classes.date}>{props.todayDate()}</span>
        </div>
        <div className={classes.content}>
        <table className={classes.tableRed}>
                <thead>공격팀</thead>
                <tr>
                    <td>티어</td>
                    <td>스트리머</td>
                    <td>레이팅</td>
                    <td>모스트</td>
                </tr>
                <tr>
                    <td>A</td>
                    <td>
                        <div className="streamerIcon"></div>
                        <h3>홍길동</h3>
                    </td>
                    <td>
                        MAX
                        MIN
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>B</td>
                    <td>
                    <div className="streamerIcon"></div>
                        <h3>홍길동</h3>
                    </td>
                    <td>
                        MAX
                        MIN
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>C</td>
                    <td>
                    <div className="streamerIcon"></div>
                        <h3>홍길동</h3>
                    </td>
                    <td>
                        MAX
                        MIN
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>D</td>
                    <td>
                    <div className="streamerIcon"></div>
                        <h3>홍길동</h3>
                    </td>
                    <td>
                        MAX
                        MIN
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>E</td>
                    <td>
                    <div className="streamerIcon"></div>
                        <h3>홍길동</h3>
                    </td>
                    <td>
                        MAX
                        MIN
                    </td>
                    <td>
                        
                    </td>
                </tr>
            </table><table className={classes.tableRed}>
                <thead>공격팀</thead>
                <tr>
                    <td>티어</td>
                    <td>스트리머</td>
                    <td>레이팅</td>
                    <td>모스트</td>
                </tr>
                <tr>
                    <td>A</td>
                    <td>
                        <div className="streamerIcon"></div>
                        <h3>홍길동</h3>
                    </td>
                    <td>
                        MAX
                        MIN
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>B</td>
                    <td>
                    <div className="streamerIcon"></div>
                        <h3>홍길동</h3>
                    </td>
                    <td>
                        MAX
                        MIN
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>C</td>
                    <td>
                    <div className="streamerIcon"></div>
                        <h3>홍길동</h3>
                    </td>
                    <td>
                        MAX
                        MIN
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>D</td>
                    <td>
                    <div className="streamerIcon"></div>
                        <h3>홍길동</h3>
                    </td>
                    <td>
                        MAX
                        MIN
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>E</td>
                    <td>
                    <div className="streamerIcon"></div>
                        <h3>홍길동</h3>
                    </td>
                    <td>
                        MAX
                        MIN
                    </td>
                    <td>
                        
                    </td>
                </tr>
            </table>
        </div>
        <div className={classes.footer}>
            footer
        </div>
      </div>
    </>
  );
};

export default Members;
