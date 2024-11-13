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
  ];

  return (
    <div className="m-2 md:m-5 p-0.5 md:p-2">
      <h1 className="text-base md:text-2xl font-bold">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
