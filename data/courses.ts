const courses = [
  {
    id: "course-1",
    title: "Course 1",
    description: "This is a description for Course 1.",
    views: 1000,
    image: "/course_1.webp",
    level: "Beginner",
    sections: [
      {
        id: "c1s1",
        title: "Section 1 - Course 1",
        videos: [
          {
            id: "c1s1v1",
            title: "Video 1 - Course 1 Section 1",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
          {
            id: "c1s1v2",
            title: "Video 2 - Course 1 Section 1",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
        ],
      },
      {
        id: "c1s2",
        title: "Section 2 - Course 1",
        videos: [
          {
            id: "c1s2v1",
            title: "Video 1 - Course 1 Section 2",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
          {
            id: "c1s2v2",
            title: "Video 2 - Course 1 Section 2",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c1s2v3",
            title: "Video 3 - Course 1 Section 2",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
        ],
      },
      {
        id: "c1s3",
        title: "Section 3 - Course 1",
        videos: [
          {
            id: "c1s3v1",
            title: "Video 1 - Course 1 Section 3",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
          {
            id: "c1s3v2",
            title: "Video 2 - Course 1 Section 3",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c1s3v3",
            title: "Video 3 - Course 1 Section 3",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
        ],
      },
    ],
  },
  {
    id: "course-2",
    title: "Course 2",
    description: "This is a description for Course 2.",
    views: 560,
    image: "/course_2.webp",
    level: "Intermediate",
    sections: [
      {
        id: "c2s1",
        title: "Section 1 - Course 2",
        videos: [
          {
            id: "c2s1v1",
            title: "Video 1 - Course 2 Section 1",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
          {
            id: "c2s1v2",
            title: "Video 2 - Course 2 Section 1",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c2s1v3",
            title: "Video 3 - Course 2 Section 1",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
        ],
      },
      {
        id: "c2s2",
        title: "Section 2 - Course 2",
        videos: [
          {
            id: "c2s2v1",
            title: "Video 1 - Course 2 Section 2",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c2s2v2",
            title: "Video 2 - Course 2 Section 2",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
          {
            id: "c2s2v3",
            title: "Video 3 - Course 2 Section 2",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
        ],
      },
      {
        id: "c2s3",
        title: "Section 3 - Course 2",
        videos: [
          {
            id: "c2s3v1",
            title: "Video 1 - Course 2 Section 3",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
          {
            id: "c2s3v2",
            title: "Video 2 - Course 2 Section 3",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c2s3v3",
            title: "Video 3 - Course 2 Section 3",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
        ],
      },
    ],
  },
  {
    id: "course-3",
    title: "Course 3",
    description: "This is a description for Course 3.",
    views: 600,
    image: "/course_3.webp",
    level: "Advanced",
    sections: [
      {
        id: "c3s1",
        title: "Section 1 - Course 3",
        videos: [
          {
            id: "c3s1v1",
            title: "Video 1 - Course 3 Section 1",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c3s1v2",
            title: "Video 2 - Course 3 Section 1",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
          {
            id: "c3s1v3",
            title: "Video 3 - Course 3 Section 1",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
        ],
      },
      {
        id: "c3s2",
        title: "Section 2 - Course 3",
        videos: [
          {
            id: "c3s2v1",
            title: "Video 1 - Course 3 Section 2",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c3s2v2",
            title: "Video 2 - Course 3 Section 2",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
          {
            id: "c3s2v3",
            title: "Video 3 - Course 3 Section 2",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
        ],
      },
      {
        id: "c3s3",
        title: "Section 3 - Course 3",
        videos: [
          {
            id: "c3s3v1",
            title: "Video 1 - Course 3 Section 3",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
          {
            id: "c3s3v2",
            title: "Video 2 - Course 3 Section 3",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c3s3v3",
            title: "Video 3 - Course 3 Section 3",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
        ],
      },
    ],
  },
  {
    id: "course-4",
    title: "Course 4",
    description: "This is a description for Course 4.",
    views: 825,
    image: "/course_4.webp",
    level: "Beginner",
    sections: [
      {
        id: "c4s1",
        title: "Section 1 - Course 4",
        videos: [
          {
            id: "c4s1v1",
            title: "Video 1 - Course 4 Section 1",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c4s1v2",
            title: "Video 2 - Course 4 Section 1",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
          {
            id: "c4s1v3",
            title: "Video 3 - Course 4 Section 1",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
        ],
      },
      {
        id: "c4s2",
        title: "Section 2 - Course 4",
        videos: [
          {
            id: "c4s2v1",
            title: "Video 1 - Course 4 Section 2",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
          {
            id: "c4s2v2",
            title: "Video 2 - Course 4 Section 2",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c4s2v3",
            title: "Video 3 - Course 4 Section 2",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
        ],
      },
      {
        id: "c4s3",
        title: "Section 3 - Course 4",
        videos: [
          {
            id: "c4s3v1",
            title: "Video 1 - Course 4 Section 3",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c4s3v2",
            title: "Video 2 - Course 4 Section 3",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
          {
            id: "c4s3v3",
            title: "Video 3 - Course 4 Section 3",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
        ],
      },
    ],
  },
  {
    id: "course-5",
    title: "Course 5",
    description: "This is a description for Course 5.",
    views: 777,
    image: "/course_5.webp",
    level: "Intermediate",
    sections: [
      {
        id: "c5s1",
        title: "Section 1 - Course 5",
        videos: [
          {
            id: "c5s1v1",
            title: "Video 1 - Course 5 Section 1",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
          {
            id: "c5s1v2",
            title: "Video 2 - Course 5 Section 1",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c5s1v3",
            title: "Video 3 - Course 5 Section 1",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
        ],
      },
      {
        id: "c5s2",
        title: "Section 2 - Course 5",
        videos: [
          {
            id: "c5s2v1",
            title: "Video 1 - Course 5 Section 2",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c5s2v2",
            title: "Video 2 - Course 5 Section 2",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
          {
            id: "c5s2v3",
            title: "Video 3 - Course 5 Section 2",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
        ],
      },
      {
        id: "c5s3",
        title: "Section 3 - Course 5",
        videos: [
          {
            id: "c5s3v1",
            title: "Video 1 - Course 5 Section 3",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
          {
            id: "c5s3v2",
            title: "Video 2 - Course 5 Section 3",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c5s3v3",
            title: "Video 3 - Course 5 Section 3",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
        ],
      },
    ],
  },
  {
    id: "course-6",
    title: "Course 6",
    description: "This is a description for Course 6.",
    views: 622,
    image: "/course_6.webp",
    level: "Advanced",
    sections: [
      {
        id: "c6s1",
        title: "Section 1 - Course 6",
        videos: [
          {
            id: "c6s1v1",
            title: "Video 1 - Course 6 Section 1",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c6s1v2",
            title: "Video 2 - Course 6 Section 1",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
          {
            id: "c6s1v3",
            title: "Video 3 - Course 6 Section 1",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
        ],
      },
      {
        id: "c6s2",
        title: "Section 2 - Course 6",
        views: 662,
        videos: [
          {
            id: "c6s2v1",
            title: "Video 1 - Course 6 Section 2",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c6s2v2",
            title: "Video 2 - Course 6 Section 2",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
          {
            id: "c6s2v3",
            title: "Video 3 - Course 6 Section 2",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
        ],
      },
      {
        id: "c6s3",
        title: "Section 3 - Course 6",
        views: 1200,
        image: "/course_6.webp",
        videos: [
          {
            id: "c6s3v1",
            title: "Video 1 - Course 6 Section 3",
            url: "/videos/vid_2.mp4",
            duration: "02:01",
          },
          {
            id: "c6s3v2",
            title: "Video 2 - Course 6 Section 3",
            url: "/videos/vid_1.mp4",
            duration: "00:50",
          },
          {
            id: "c6s3v3",
            title: "Video 3 - Course 6 Section 3",
            url: "/videos/vid_3.mp4",
            duration: "01:55",
          },
        ],
      },
    ],
  },
];
export default courses;
