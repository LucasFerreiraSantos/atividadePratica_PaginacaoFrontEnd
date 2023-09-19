async function getAPI() {
  try {
    const response = await api.get(
      "/scrap/e1460ba7-7190-4fa0-b953-0e8faf063834"
    );
    const scrap = response.data;
    console.log(scrap);
  } catch (err) {
    console.log("Error: ", err);
  }
}

getAPI();
