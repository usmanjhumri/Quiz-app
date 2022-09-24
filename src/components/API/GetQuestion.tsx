import { QuizQuestion, QuizType } from './../TsTypes/QuizTypes'


const ShuflletheAns = (ans:any)=>
[...ans].sort(()=>Math.random() - 0.5)



export  const GetData = async (totalSwal: number, level: string): Promise<QuizQuestion[]> =>{
    const response = await fetch(`https://opentdb.com/api.php?amount=${totalSwal}&difficulty=${level}&type=multiple`)

    let {results}= await response.json();

    const quiz:QuizQuestion[] = results.map((item : QuizType)=>{

   return {
    question : item.question,
    answer  : item.correct_answer,
    option : ShuflletheAns(item.incorrect_answers.concat(item.correct_answer))
}

})
return quiz
// console.log(quiz);

    // const result = results.map((item:QuizType)=>{
    //     return{
    //         question: item.question,
    //         answer : item.correct_answer,
    //         option: (item.incorrect_answers.concat(item.correct_answer)
    //     }
    // })

    // return result

   
    

} 