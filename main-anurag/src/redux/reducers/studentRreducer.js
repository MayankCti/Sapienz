import { createSlice } from "@reduxjs/toolkit";
import {
  fetchDashboard,
  fetchStudentList,
  fetchStudentDetails,
  filterStudents,
} from "../actions/studentActions";

const initialState = {
  isLoading: true,
  students: [],
  studentDetail: {},
  testList: [],
  cardData: [
    {
      title: "Total Students",
      value: 14,
      backgroundColor: "rgba(130, 128, 255, 0.16)",
      iconSrc: "/assets/img/total_student_icon.svg",
    },
    {
      title: "Total Experts",
      value: 14,
      backgroundColor: "rgb(252 190 45 / 16%)",
      iconSrc: "/assets/img/total_expert_icon.svg",
    },
    {
      title: "Total Flash Cards",
      value: 236,
      backgroundColor: "rgb(0 182 155 / 16%)",
      iconSrc: "/assets/img/total_flash_card.svg",
    },
    {
      title: "Total Categories",
      value: 425,
      backgroundColor: "rgba(255, 144, 102, 0.16)",
      iconSrc: "/assets/img/total_categories_icon.svg",
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
      const {
        TotalCategories,
        TotalStudents,
        TotalFlashCard,
        TotalExperts,
        allStudents,
      } = action?.payload ?? {};
      state.cardData[0].value = TotalStudents ?? 0;
      state.cardData[1].value = TotalExperts ?? 0;
      state.cardData[2].value = TotalFlashCard ?? 0;
      state.cardData[3].value = TotalCategories ?? 0;
      state.students = allStudents ?? [];
      state.isLoading = false;
    });
    builder.addCase(fetchDashboard.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDashboard.rejected, (state, action) => {
      state.isLoading = false;
    });
    // fetch-student-details
    builder.addCase(fetchStudentDetails.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      return {
        ...state,
        isLoading: false,
        studentDetail: data ?? null,
        testList: data?.allTestRecords ?? [],
      };
    });
    builder.addCase(fetchStudentDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStudentDetails.rejected, (state, action) => {
      state.isLoading = false;
    });

    // filter-students
    builder.addCase(filterStudents.fulfilled, (state, action) => {
      const { allStudents } = action?.payload || {};
      state.students = allStudents;
      state.isLoading = false;
    });
    builder.addCase(filterStudents.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(filterStudents.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export const { toggleBlock } = studentSlice?.actions;
export default studentSlice.reducer;
