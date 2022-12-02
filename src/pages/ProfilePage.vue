<template>
  <div class="box">
    <table>
      <tr>
        <td>
          <section>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              id="blah"
              alt="Avatar"
            />
          </section>
          <div class="text-secondary text-h2">{{ userArray.name }}</div>
        </td>
        <td>
          <ul class="column column-padding">
            <li>
              <div class="text-primary text-h4">Nombre</div>
              <div class="text-secondary text-h5 q-pt-md">
                {{ userArray.name }} {{ userArray.subname }}
              </div>
            </li>

            <li>
              <div class="text-primary text-h4 q-pt-md">Email</div>
              <div class="text-secondary text-h5 q-pt-md">
                {{ userArray.email }}
              </div>
            </li>

            <li>
              <div class="text-primary text-h4 q-pt-md">Telefono</div>
              <div class="text-secondary text-h5 q-pt-md">
                {{ userArray.phone }}
              </div>
            </li>

            <q-separator spaced />
            <li>
              <div class="text-primary text-h4 q-pt-md">
                Porque quieres adoptar?
              </div>
              <div class="text-secondary text-h5 q-pt-md">
                {{ userArray.bio }}
              </div>
            </li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { defineComponent } from "vue";
import { getDoc, doc } from "firebase/firestore";
import db from "../boot/db";

export default defineComponent({
  data() {
    return {
      userArray: [],
      showModal: false,
    };
  },

  // onAuthStateChanged(auth, (user) => {})
  async created() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      try {
        if (docSnap.exists()) {
          const userInfo = docSnap.data();
          this.userArray = userInfo;
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Usuario no logeado");
    }
  },
});
</script>

<style>
.info {
  position: relative;
  left: -20px;
}

.info li {
  padding: 20px 0;
  color: gray;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.box {
  width: 90%;
  margin: 10vh auto;
}

.box table {
  width: 100%;
}

.box table td {
  margin: 30px;
  border-radius: 5px;
  box-shadow: 0px 6px 16px -6px rgba(1, 1, 1, 0.5);
  padding: 30px;
  background-color: #fff;
  color: #fff;
  vertical-align: top;
}

.box table td:nth-child(1) section {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 5vh auto;
}

.box table td:nth-child(1) .fa {
  position: absolute;
  right: 25px;
  top: 25px;
  font-size: 2em;
}

.box table td img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.box table td h3 {
  color: gray;
  font-weight: normal;
}

@media (max-width: 820px) {
  .box {
    width: 100%;
  }
  .box table td {
    display: block;
  }
  .box table .section2 .quantityselector section {
    width: 41%;
    margin: 0px 10px;
  }
  .box table .section2 ul {
    position: relative;
    left: -40px;
  }
}

@media (max-width: 480px) {
  .column-padding {
    padding: 0;
  }
}
</style>
