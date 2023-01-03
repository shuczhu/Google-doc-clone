// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { gql } from '@apollo/client';

// // const SAVE_TWEET = gql`
// // mutation createTweet($content: String!) {
// //     createTweet(content: $content) {
// //       content
// //     }
// //   }
// // `;

// const Textform = () => {
//   const [tweets, setTweets] = useState([]);
//   const [input, setInput] = useState('');

// //   const [saveTweet, { loading, error }] = useMutation(SAVE_TWEET);

//   const handleChange = (event) => {
//     setInput(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setTweets([...tweets, input]);
//     setInput('');
//   };

//   const handleSave = (index) => {
//     const content = tweets[index];

//     // Save the tweet
//     saveTweet({ variables: { content: content } }).then(() => {
//       // Remove the tweet from the local tweets array
//       setTweets(tweets.filter((_, i) => i !== index));
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter a tweet:
//           <input type="text" value={input} onChange={handleChange} />
//         </label>
//         <input type="submit" value="Add Tweet" />
//       </form>
//       {tweets.length > 0 && (
//         <ul>
//           {tweets.map((tweet, index) => (
//             <li key={index}>
//               {tweet}
//               {!loading && !error && (
//                 <button onClick={() => handleSave(index)}>Save</button>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Textform;
import React, { useState } from 'react';
import styles from "./index.module.css";
import { useMutation} from '@apollo/client';
import { gql } from '@apollo/client';


const Textform = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

//   const SAVE_TWEET = gql`
// mutation createTweet($content: String!) {
//     createTweet(content: $content) {
//       content
//     }
//   }
// `;

// const [createTweet, { error }] = useMutation(SAVE_TWEET);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, input]);
    setInput('');
  };

  const handleSavetoDB = async (event) => {
    event.preventDefault();
    alert("saved successfully!");
    // alert(event.target[0].value);
    // const content = event.target[0].value;
    // createTweet({ variables: { content}})
  } 

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Compose a Tweet:</h3>
          <input type="text" value={input} placeholder="compose your tweet" onChange={handleChange} />
        </label>
        <input type="submit" value="Compose" />
      </form>
      {tasks.length > 0 && (
        <ul className={styles.result}>
          {tasks.map((task, index) => (
          <form onSubmit={handleSavetoDB}>
          <input type="text" value={task} />
          <input type="submit" value="Save"/>
        </form>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Textform;

