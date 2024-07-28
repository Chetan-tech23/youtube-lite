import CommentList from "./CommentList";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Anna Green",
      text: "Fantastic video! Very well explained.",
      replies: [
        {
          name: "John Doe",
          text: "I found the content very useful. Thanks for sharing!",
          replies: [
            {
              name: "Anna Green",
              text: "You’re welcome, John! I’m glad you found it helpful.",
              replies: [
                {
                  name: "Mia Lewis",
                  text: "I agree! The video was well-structured.",
                  replies: [
                    {
                      name: "John Doe",
                      text: "Mia, did you have any favorite parts?",
                      replies: [
                        {
                          name: "Mia Lewis",
                          text: "The examples in the middle section were particularly helpful.",
                          replies: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Chris Evans",
          text: "Nice content, but I think it could use more real-world examples.",
          replies: [
            {
              name: "Anna Green",
              text: "Thanks for the feedback, Chris. I’ll consider that for future videos.",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Liam Carter",
      text: "I have a question about the last section.",
      replies: [
        {
          name: "Sophia Brown",
          text: "What’s your question, Liam?",
          replies: [
            {
              name: "Liam Carter",
              text: "Can you clarify the concept of asynchronous programming?",
              replies: [
                {
                  name: "Oliver Scott",
                  text: "Sure, Liam! Asynchronous programming allows a program to perform tasks while waiting for other operations to complete.",
                  replies: [
                    {
                      name: "Liam Carter",
                      text: "Thanks, Oliver. That helps a lot!",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Evelyn King",
      text: "The tutorial was very comprehensive. I appreciate the effort!",
      replies: [],
    },
    {
      name: "James Turner",
      text: "The content was good, but the pacing was a bit slow for my taste.",
      replies: [
        {
          name: "Isabella Wright",
          text: "I actually found the pacing quite good. It allowed me to follow along easily.",
          replies: [],
        },
      ],
    },
    {
      name: "Emma Collins",
      text: "Can you provide additional resources for further learning?",
      replies: [
        {
          name: "Lucas Green",
          text: "I second that request. Additional resources would be very helpful.",
          replies: [
            {
              name: "Emma Collins",
              text: "Thanks, Lucas. Hopefully, there will be some recommendations soon.",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Oliver Scott",
      text: "Great content overall, though I had some issues with the video quality.",
      replies: [],
    },
    {
      name: "Ava Mitchell",
      text: "I loved the interactive elements of the video!",
      replies: [
        {
          name: "Emily Brown",
          text: "Yes, the interactive elements really helped in understanding the topic.",
          replies: [],
        },
      ],
    },
    {
      name: "Noah Adams",
      text: "This was too basic for me. I was hoping for something more advanced.",
      replies: [],
    },
  ];

  return (
    <div className="m-5 p-2 w-[63rem]">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
