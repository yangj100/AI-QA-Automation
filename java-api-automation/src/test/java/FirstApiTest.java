
//import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

public class FirstApiTest {

    @Test
    public void getFirstPost() {
        given()
                .when()
                .get("https://jsonplaceholder.typicode.com/posts/1")
                .then()
                .statusCode(200)
                .body("id", equalTo(1));
        // .body(path: "userId", equalTo(1));
    }
}