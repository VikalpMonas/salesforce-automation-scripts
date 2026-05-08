import { execSync } from "child_process";
import fs from "fs";
import inquirer from "inquirer";
import config from "../config/user-config.json" assert { type: "json" };

const orgAlias = process.argv[2] || "demo-org";

async function run() {

  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "country",
      message: "Select Country:",
      choices: Object.keys(config)
    },
    {
      type: "list",
      name: "persona",
      message: "Select Persona:",
      choices: (answers) =>
        Object.keys(config[answers.country].personas)
    },
    {
      type: "number",
      name: "count",
      message: "How many users?",
      default: 1
    }
  ]);

  const personaConfig =
    config[answers.country].personas[
      answers.persona
    ];

  for (let i = 0; i < answers.count; i++) {

    const email =
      `demo${Date.now()}${i}@test.com`;

    const username = email;

    const createUserApex = `
      Profile p = [
        SELECT Id
        FROM Profile
        WHERE Name = '${personaConfig.profile}'
        LIMIT 1
      ];

      UserRole r = [
        SELECT Id
        FROM UserRole
        WHERE Name = '${personaConfig.role}'
        LIMIT 1
      ];

      User u = new User(
        Username = '${username}',
        FirstName = 'Demo',
        LastName = '${answers.persona.replace(/ /g, "")}',
        Email = '${email}',
        Alias = 'dusr',
        ProfileId = p.Id,
        UserRoleId = r.Id,
        TimeZoneSidKey = 'America/New_York',
        EmailEncodingKey = 'UTF-8',
        LocaleSidKey = '${personaConfig.locale}',
        LanguageLocaleKey = '${personaConfig.languageLocale}'
      );

      insert u;

      System.debug('USER_ID:' + u.Id);
    `;

    fs.writeFileSync(
      "scripts/createUser.apex",
      createUserApex
    );

    const result = execSync(
      `sf apex run --target-org ${orgAlias} --file scripts/createUser.apex`
    ).toString();

    console.log(result);
  }
}

run();