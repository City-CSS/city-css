import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { Client } from "pg";

interface RequestBody {
  name: string; // Include name field
  email: string;
}

export async function POST(request: NextRequest) {
  // Initialize PostgreSQL client inside the function
  const client = new Client({
    connectionString: process.env.POSTGRES_URL, // Use environment variable for connection string
  });

  try {
    await client.connect(); // Connect to the database

    // Parse the request body to extract name and email
    const { name, email }: RequestBody = await request.json();

    // Check if email already exists
    const result = await client.query(
      "SELECT email FROM message WHERE email = $1",
      [email],
    );

    if (result.rows.length > 0) {
      return NextResponse.json(
        {
          message: `Email ${email} is already on the waiting list.`,
        },
        { status: 409 }, // Conflict
      );
    }

    // Insert the name and email into the database
    await client.query("INSERT INTO message (name, email) VALUES ($1, $2)", [
      name,
      email,
    ]);

    // Construct the response
    return NextResponse.json({
      message: `Email ${email} has been successfully added to the waiting list!`,
    });
  } catch (error) {
    // Log the error to help with debugging
    console.error("Error during POST request:", error);

    // Return error message with status code 500
    return NextResponse.json(
      {
        message: "An error occurred. Please try again.",
      },
      { status: 500 },
    );
  } finally {
    // Ensure the database connection is closed
    await client.end();
  }
}
