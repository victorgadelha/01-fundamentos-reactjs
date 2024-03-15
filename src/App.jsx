import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ipsam, aut ducimus molestiae consectetur adipisci assumenda vitae maxime doloribus praesentium eligendi animi similique totam sint tempora fugiat, placeat voluptates maiores."
          />
          <Post
            author="Gabriel Buzzi"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ipsam, aut ducimus molestiae consectetur adipisci assumenda vitae maxime doloribus praesentium eligendi animi similique totam sint tempora fugiat, placeat voluptates maiores."
          />
        </main>
      </div>
    </div>
  );
}
