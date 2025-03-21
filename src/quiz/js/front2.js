import '../css/front2.css';
import { useEffect, useState } from 'react';
// import { frontTechnologyData, frontTechnologyHtmlData, frontTechnologyCssData, frontTechnologyJavascriptData, frontTechnologyReactData, frontTechnologyTypescriptData, frontPortfolioData } from '../data/front_data';
import { com, spread } from '../data/com_data';

const Front2 = () => {

    function randomArray(array) {
        const shuffledArray = [...array]; // 원본 배열 복사
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // 0부터 i까지 무작위 인덱스 생성
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // 두 요소 교환
        }
        return shuffledArray;
    }

    const [categorySelect, setCategorySelect] = useState(1);
    const [quizInfo, setQuizInfo] = useState([]);
    const [quizNum, setQuizNum] = useState(0);
    const [quizAnswer, setQuizAnswer] = useState();

    const [easy, setEasy] = useState(true);

    useEffect(() => {
        if (categorySelect === 1) {
            setQuizInfo((com));setQuizNum(0);
            if (easy) { setQuizAnswer(true) } else{ setQuizAnswer(false);setQuizInfo(randomArray(com));}
        }
        if (categorySelect === 2) {
            setQuizInfo((spread));setQuizNum(0);
            if (easy) { setQuizAnswer(true) } else{ setQuizAnswer(false);setQuizInfo(randomArray(spread));}
        }
    }, [categorySelect, easy])

    return(
        <div className='front_container'>
            <div className='front_title_content'>
                컴퓨터 활용능력 2급 필기
            </div>
            <div className='front_category_container'>
                <div className='front2_category_content'>
                    <div onClick={() => setCategorySelect(1)} style={{ color: categorySelect === 1 ? '#3578FF' : '', backgroundColor: categorySelect === 1 ? 'white' : '' }} className='front_category'>
                        컴퓨터 일반
                    </div>
                    <div onClick={() => setCategorySelect(2)} style={{ color: categorySelect === 2 ? '#3578FF' : '', backgroundColor: categorySelect === 2 ? 'white' : '' }} className='front_category'>
                        스프레드시트 일반
                    </div>
                </div>
            </div>
            <div className='front_quiz_title_container'>
                <div>{quizInfo.length} / {quizNum+1}</div>
            </div>

            <div className='front2_quiz_info_container'>

                <div className='front_quiz_info_question_title_content'>
                    질문
                </div>

                <div className='front2_quiz_info_question_container'>
                    {quizInfo.length > 0 ? ( 
                        <div style={{ whiteSpace: "pre-line" }} className='front_quiz_info_question'>{quizInfo[quizNum].question}</div> 
                    ) : ( 
                        <></> 
                    )}
                </div>

                <div className='front2_quiz_info_line_content'>
                    <div className='front_quiz_info_line'></div>
                </div>

                <div className='front_quiz_info_answer_title_content'>
                        답 
                </div>

                <div className='front2_quiz_info_answer_container'>
                    {quizInfo.length && quizAnswer > 0 ? ( 
                        <div style={{ whiteSpace: "pre-line" }} className='front2_quiz_info_answer'>{quizInfo[quizNum].answer}</div> 
                    ) : ( 
                        <></> 
                    )}
                </div>
            </div>

            <div className='front_quiz_select_container'>
                <div className='front_quiz_select_content' 
                    onClick={() => {
                        setQuizNum((prev) => Math.max(prev - 1, 0)); 
                        if (!easy) {
                            setQuizAnswer(false);
                        }
                    }}
                    style={{ color: quizNum === 0 ? 'rgba(0,0,0,0.2)' : '', border: quizNum === 0 ? '1.5px solid rgba(0,0,0,0.2)' : '', pointerEvents: quizNum === 0 ? 'none' : ""}}
                >
                    이전
                </div>
                {/* <div className='front_quiz_select_content'
                    onClick={() => setQuizAnswer(true)}
                    style={{color: quizAnswer ? 'rgba(0,0,0,0.2)' : '', border: quizAnswer ? '1.5px solid rgba(0,0,0,0.2)' : ''}}
                >
                    답 보기
                </div> */}
                <div className='front_quiz_select_content' 
                    onClick={() => {
                        setQuizNum((prev) => Math.min(prev + 1, quizInfo.length - 1)); 
                        if (!easy) {
                            setQuizAnswer(false);
                        }
                    }}
                    style={{ color: quizNum === quizInfo.length - 1 ? 'rgba(0,0,0,0.2)' : '', border: quizNum ===  quizInfo.length - 1 ? '1.5px solid rgba(0,0,0,0.2)' : "", pointerEvents: quizNum ===  quizInfo.length - 1 ? 'none' : ""}}
                >
                    다음
                </div>
            </div>
        </div>
    )
}

export default Front2;