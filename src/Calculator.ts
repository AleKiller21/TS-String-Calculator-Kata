export class Calculator {
  sum(input?: string) {
    let value = input;
    let separators: string | RegExp = /,|\n/g;

    if (!input) {
      return 0;
    }

    if(input.startsWith("//")) {
      const sections = input.split("\n");
      separators = sections[0]
        .replace("//", "")
        .replace("[", "")
        .split("]")
        .filter((separators: string) => Boolean(separators))
        .join("");

      separators = new RegExp(`[${separators}]`, "g")
      value = sections[1];
    }

    const numbers = value
      .split(separators)
      .map((number) => Number(number));

    const negatives = numbers.filter(number => number < 0);

    if (negatives.length) {
      throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }

    return numbers
      .filter(number => number < 1001)
      .reduce((accumulator, value) => accumulator + value, 0);
  }
}