const token = "63a5200947657d57a8ad034f0a74d671";
const baseURL = `https://superheroapi.com/api.php/${token}`;

async function search(name) {
  try {
    const res = await fetch(`${baseURL}/search/${encodeURIComponent(name)}`);
    const data = await res.json();
    if (data.response === "success") {
      return { results: data.results };
    } else {
      return { message: "Nenhum personagem encontrado" };
    }
  } catch (err) {
    return { message: "Erro na requisição", error: err.message };
  }
}
