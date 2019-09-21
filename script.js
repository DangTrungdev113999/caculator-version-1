const target = document.form.textView;

let insert = value => {
  if (value === "C") {
    clear();
    return;
  }

  if (value === "<") {
    back();
    return;
  }

  if (value === "=") {
    equal();
    return;
  }

  target.value = target.value + value;
};

let clear = () => {
    target.value = "";
};

let back = () => {
  target.value = target.value.substring(0, target.value.length - 1);
}

let equal = () => {
  if (target.value) {
    target.value = eval(target.value);
  };
}

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.forEach(button => {
  button.addEventListener("click", () => {
    insert(button.value);
  })
});