import selectionFilter from "../../utils/selection-filter";

test("selectionFilter with legitmate data", () => {
  const series = [
    {
      title: "Documentaries",
      data: [
        {
          id: "series-1x",
          title: "Tiger King",
          description:
            "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
          genre: "documentaries",
          maturity: "18",
          slug: "tiger-king",
        },
      ],
    },
  ];
});
