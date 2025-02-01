import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { Client } from "pg";

interface RequestBody {
  name: string;
  email: string;
  year: string;
  lookingForTeam: boolean;
  interest: string;
  hasExperience: boolean;
  experienceDetails: string;
  selectedWorkAreas: string[];
}

export async function POST(request: NextRequest) {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });

  try {
    await client.connect();

    const {
      name,
      email,
      year,
      lookingForTeam,
      interest,
      hasExperience,
      experienceDetails,
      selectedWorkAreas,
    }: RequestBody = await request.json();

    const countResult = await client.query(
      "SELECT COUNT(*) FROM registration_interest",
    );
    const signupCount = parseInt(countResult.rows[0].count, 10);

    if (signupCount >= 90) {
      return NextResponse.json(
        {
          message: "The waiting list is full. No more sign-ups are allowed.",
        },
        { status: 403 },
      );
    }

    const result = await client.query(
      "SELECT email FROM registration_interest WHERE email = $1",
      [email],
    );

    if (result.rows.length > 0) {
      return NextResponse.json(
        {
          message: `Email ${email} is already on the waiting list.`,
        },
        { status: 409 },
      );
    }

    // Store the selected work areas as a comma-separated string
    const workAreas = selectedWorkAreas.join(", ");

    await client.query(
      "INSERT INTO registration_interest (name, email, year, looking_for_team, interest, has_experience, experience_details, work_areas) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        name,
        email,
        year,
        lookingForTeam,
        interest,
        hasExperience,
        experienceDetails,
        workAreas,
      ],
    );

    return NextResponse.json({
      message: `Email ${email} has been successfully added to the waiting list!`,
    });
  } catch (error) {
    console.error("Error during POST request:", error);
    return NextResponse.json(
      {
        message: "An error occurred. Please try again.",
      },
      { status: 500 },
    );
  } finally {
    await client.end();
  }
}
