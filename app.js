const app = Vue.createApp({
  data() {
    return {
      name:"",
      age:"",
      nameAndAge: [],
      enteredGoalValue: "",
      goals: [],
      checkVar: false
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = "";
    },
    addInfo(){
      this.nameAndAge.push(this.name);
      this.nameAndAge.push(this.age);
      this.checkVar = true;
    },
    removeGoal(indx) {
      this.goals.splice(indx, 1);
    },
  },
});

app.mount("#user-goals");
