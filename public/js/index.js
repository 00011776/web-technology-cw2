const inputs = document.querySelectorAll(".form-input input");
const array = window.location.pathname.split("/");

if (window.location.pathname === `/games/update/${array[array.length - 1]}`) {
  get();
}

async function get() {
  const res = await axios.get(
    `${window.location.origin}/backend/games/${array[array.length - 1]}`
  );

  const data = res.data.data.games;
  inputs.forEach((input) => {
    input.value = data[input.name];
  });
}
