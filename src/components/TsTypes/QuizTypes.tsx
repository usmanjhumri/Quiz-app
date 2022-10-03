export type QuizType = {
            category: string
            correct_answer: string
            difficulty:  string
            incorrect_answers:  string[]
            question:  string
            type:  string
            question_number:number
}

export type QuizQuestion = {
    question: string
    answer: string
    option: string[]
    

}

export type QuizOptionQuestion = {
    question: string,
    option:string[],
    answer:string
  
    callback: (e:React.FormEvent<EventTarget>)=>void
}