export type QuizType = {
            category: string
            correct_answer: string
            difficulty:  string
            incorrect_answers:  string[]
            question:  string
            type:  string
}

export type QuizQuestion = {
    question: string
    answer: string
    option: string[]

}