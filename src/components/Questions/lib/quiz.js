const questions = [
   {
      question: "1",
      answers: [
         { answerText: "I do not feel sad.", score: 0 },
         { answerText: "I feel sad ", score: 1 },
         { answerText: "I am sad all the time and I can't snap out of it.", score: 2
       },
         { answerText: "I am so sad and unhappy that I can't stand it.", score: 3 },
      ]
   },
   {
      question: "2",
      answers: [
         { answerText: "I am not particularly discouraged about the future.", score: 0 },
         { answerText: "I feel discouraged about the future. ", score: 1      },
         { answerText: "I feel I have nothing to look forward to.", score: 2 },
         { answerText: "I feel the future is hopeless and that things cannot improve.", score: 3 },
      ]
   },
   {
      question: "3",
      answers: [
         { answerText: "I do not feel like a failure.", score: 0 },
         { answerText: "I feel I have failed more than the average person.", score: 1 },
         { answerText: "As I look back on my life, all I can see is a lot of failures.", score: 2 },
         { answerText: "I feel I am a complete failure as a person. ", score: 3 },
      ]
   },
   {
      question: "4",
      answers: [
         { answerText: "I get as much satisfaction out of things as I used to.", score: 0 },
         { answerText: "I don't enjoy things the way I used to.", score: 1 },
         { answerText: "I don't get real satisfaction out of anything anymore.", score: 2},
         { answerText: "I am dissatisfied or bored with everything.", score: 3 },
      ]
   },
   {
      question: "5",
      answers: [
         { answerText: "I don't feel particularly guilty.", score: 0 },
         { answerText: "I feel guilty a good part of the time.", score: 1},
         { answerText: "I feel quite guilty most of the time.", score: 2 },
         { answerText: "I feel guilty all of the time.", score: 3 },
      ]
   },
   {
      question: "6",
      answers: [
         { answerText: "I don't feel I am being punished.", score: 0},
         { answerText: "I feel I may be punished. ", score: 1 },
         { answerText: "I expect to be punished.", score: 2 },
         { answerText: "I feel I am being punished. ", score: 3 },
      ]
   },
   {
      question: "7",
      answers: [
         { answerText: "I don't feel disappointed in myself.", score: 0},
         { answerText: "I am disappointed in myself.", score: 1 },
         { answerText: "I am disgusted with myself.", score: 2 },
         { answerText: "I hate myself. ", score: 3 },
      ]
   },
   {
      question: "8",
      answers: [
         { answerText: "I don't feel I am any worse than anybody else.", score: 0 },
         { answerText: "I am critical of myself for my weaknesses or mistakes.", score: 1 },
         { answerText: "I blame myself all the time for my faults.", score: 2 },
         { answerText: "I blame myself for everything bad that happens.", score: 3
       },
      ]
   },
   {
      question: "9",
      answers: [
         { answerText: "I don't have any thoughts of killing myself.", score: 0 },
         { answerText: "I have thoughts of killing myself, but I would not carry them out. ", score: 1},
         { answerText: "I would like to kill myself.", score: 2 },
         { answerText: "I would kill myself if I had the chance. ", score: 3 },
      ]
   },
   {
      question: "10",
      answers: [
         { answerText: "I don't cry any more than usual.", score: 0 },
         { answerText: "I cry more now than I used to.", score: 1},
         { answerText: "I cry all the time now. ", score: 2 },
         { answerText: "I used to be able to cry, but now I can't cry even though I want to.", score: 3 },
      ]
   },
   {
      question: "11",
      answers: [
         { answerText: "I am no more irritated by things than I ever was. ", score: 0 },
         { answerText: "I am slightly more irritated now than usual. ", score: 1 },
         { answerText: "I am quite annoyed or irritated a good deal of the time.", score: 2},
         { answerText: "I feel irritated all the time.", score: 3 },
      ]
   },
   {
      question: "12",
      answers: [
         { answerText: "I have not lost interest in other people. ", score: 0 },
         { answerText: "I am less interested in other people than I used to be.", score: 1 },
         { answerText: "I have lost most of my interest in other people. ", score: 2 },
         { answerText: "I have lost all of my interest in other people.", score: 3
       },
      ]
   },
   {
      question: "13",
      answers: [
         { answerText: "I make decisions about as well as I ever could.", score: 0 },
         { answerText: "I put off making decisions more than I used to.", score: 1 },
         { answerText: "I have greater difficulty in making decisions more than I used to. ", score: 2 },
         { answerText: "I can't make decisions at all anymore. ", score: 3       },
      ]
   },
   {
      question: "14",
      answers: [
         { answerText: "I don't feel that I look any worse than I used to. ", score: 0       },
         { answerText: "I am worried that I am looking old or unattractive. ", score: 1 },
         { answerText: "I feel there are permanent changes in my appearance that make me look unattractive. ", score: 2 },
         { answerText: "I believe that I look ugly.", score: 3 },
      ]
   },
   {
      question: "15",
      answers: [
         { answerText: "I can work about as well as before.", score: 0 },
         { answerText: "It takes an extra effort to get started at doing something. ", score: 1 },
         { answerText: "I have to push myself very hard to do anything.", score: 2},
         { answerText: "I can't do any work at all.", score: 3 },
      ]
   },
   {
      question: "16",
      answers: [
         { answerText: "I can sleep as well as usual.", score: 0 },
         { answerText: "I don't sleep as well as I used to.", score: 1  },
         { answerText: "I wake up 1-2 hours earlier than usual and find it hard to get back to sleep.", score: 2 },
         { answerText: "I wake up several hours earlier than I used to and cannot get back to sleep. ", score: 3 },
      ]
   },
   {
      question: "17",
      answers: [
         { answerText: "I don't get more tired than usual. ", score: 0},
         { answerText: "I get tired more easily than I used to.", score: 1 },
         { answerText: "I get tired from doing almost anything. ", score: 2 },
         { answerText: "I am too tired to do anything.", score: 3 },
      ]
   },
   {
      question: "18",
      answers: [
         { answerText: "My appetite is no worse than usual. ", score: 0 },
         { answerText: "My appetite is not as good as it used to be.", score: 1 },
         { answerText: "My appetite is much worse now. ", score: 2 },
         { answerText: "I have no appetite at all anymore.", score: 3
       },
      ]
   },
   {
      question: "19",
      answers: [
         { answerText: "I haven't lost much weight, if any, lately.", score: 0 },
         { answerText: "I have lost more than five pounds. ", score: 1},
         { answerText: "I have lost more than ten pounds.", score: 2 },
         { answerText: "I have lost more than fifteen pounds. ", score: 3 },
      ]
   },
   {
      question: "20",
      answers: [
         { answerText: "I am no more worried about my health than usual. ", score: 0 },
         { answerText: "I am worried about physical problems like aches, pains, upset stomach, or constipation.", score: 1 },
         { answerText: "I am very worried about physical problems and it's hard to think of much else. ", score: 2 },
         { answerText: "I am so worried about my physical problems that I cannot think of anything else. ", score: 3 },
      ]
   },
   {
      question: "21",
      answers: [
         { answerText: "I have not noticed any recent change in my interest in sex. ", score: 0 },
         { answerText: "I am less interested in sex than I used to be. ", score: 1 },
         { answerText: "I have almost no interest in sex. ", score: 2},
         { answerText: "I have lost interest in sex completely. ", score: 3 },
      ]
   },
   
]
 

export const randQustions = questions.sort(() => Math.random() - 0.5)