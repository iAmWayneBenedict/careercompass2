import { envConfig } from "./config";
import app from "./server";

app.listen(envConfig.PORT, () => {
	console.log("Server running on port 3000");
});
