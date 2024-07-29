import { createSlice } from "@reduxjs/toolkit";
import { fetchDashboard, fetchStudentList } from "../actions/studentActions";

const initialState = {
  isLoading: true,
  students: [],
  cardData: [
    {
      title: "Total Mock Test",
      value: 425,
      backgroundColor: "rgb(130 128 255 / 16%)",
      iconSrc: "/assets/img/mock_test_purple_icon.svg",
    },
    {
      title: "Total Students",
      value: 14,
      backgroundColor: "rgb(252 190 45 / 16%)",
      iconSrc: "/assets/img/total_expert_icon.svg",
    },
    {
      title: "My Flash Cards",
      value: 236,
      backgroundColor: "rgb(0 182 155 / 16%)",
      iconSrc: "/assets/img/total_flash_card.svg",
    },
    // {
    //   title: "My Ranking",
    //   value: 62,
    //   backgroundColor: "rgb(255 144 102 / 16%)",
    //   iconSrc: "/assets/img/total_categories_icon.svg",
    //   trend: "1.8%",
    //   trendText: "Up from yesterday",
    // },
  ],
  //   [
  //     {
  //       name: "Keith Baumbach",
  //       standard: "9th Standard",
  //       email: "Giovanny51@yahoo.com",
  //       activeFrom: "12.09.2019",
  //       imgSrc: "/assets/img/expert_img_1.png",
  //     },
  //     {
  //       name: "Brenda Bogisich",
  //       standard: "9th Standard",
  //       email: "Giovanny51@yahoo.com",
  //       activeFrom: "12.09.2019",
  //       imgSrc: "/assets/img/expert_img_2.png",
  //     },
  //     {
  //       name: "Elsa Kautzer",
  //       standard: "9th Standard",
  //       email: "Marina.Schuster@yahoo.com",
  //       activeFrom: "12.09.2019",
  //       imgSrc: "/assets/img/expert_img_3.png",
  //     },
  //     {
  //       name: "Velma Fay",
  //       standard: "9th Standard",
  //       email: "Dasia_Herman51@hotmail.com",
  //       activeFrom: "12.09.2019",
  //       imgSrc: "/assets/img/expert_img_4.png",
  //     },
  //     {
  //       name: "Keith Baumbach",
  //       standard: "9th Standard",
  //       email: "Giovanny51@yahoo.com",
  //       activeFrom: "12.09.2019",
  //       imgSrc: "/assets/img/expert_img_1.png",
  //     },
  //     {
  //       name: "Brenda Bogisich",
  //       standard: "9th Standard",
  //       email: "Giovanny51@yahoo.com",
  //       activeFrom: "12.09.2019",
  //       imgSrc: "/assets/img/expert_img_2.png",
  //     },
  //     {
  //       name: "Elsa Kautzer",
  //       standard: "9th Standard",
  //       email: "Marina.Schuster@yahoo.com",
  //       activeFrom: "12.09.2019",
  //       imgSrc: "/assets/img/expert_img_3.png",
  //     },
  //     {
  //       name: "Velma Fay",
  //       standard: "9th Standard",
  //       email: "Dasia_Herman51@hotmail.com",
  //       activeFrom: "12.09.2019",
  //       imgSrc: "/assets/img/expert_img_4.png",
  //     },
  //   ],
};

const studentSlice = createSlice({
  name: "flashCard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch-student-list
    builder.addCase(fetchStudentList.fulfilled, (state, action) => {
      const { data } = action?.payload || {};
      state.students = data ?? [];
      state.isLoading = false;
    });
    builder.addCase(fetchStudentList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStudentList.rejected, (state, action) => {
      state.isLoading = false;
    });
    // fetch-dashboard
    builder.addCase(fetchDashboard.fulfilled, (state, action) => {
      const { totalStudents, myFlashCard, totalMockTest, allStudents } =
        action?.payload;
      state.cardData[0].value = totalMockTest ?? 0;
      state.cardData[1].value = totalStudents ?? 0;
      state.cardData[2].value = myFlashCard ?? 0;
      state.students = allStudents ?? [];
      state.isLoading = false;
    });
    builder.addCase(fetchDashboard.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDashboard.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default studentSlice.reducer;
