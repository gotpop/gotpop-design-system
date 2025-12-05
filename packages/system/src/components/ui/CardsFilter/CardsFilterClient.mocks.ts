import type { PostProps } from "../../storyblok/Card/Card"
import type { TagDatasourceEntry } from "./CardsFilterClient"

export const mockPosts: PostProps[] = [
  {
    _uid: "post-1",
    full_slug: "blog/lorem-ipsum-dolor",
    name: "Lorem Ipsum Dolor",
    published_at: "2024-01-15T10:00:00Z",
    component: "card",
    meta_data_page: [
      {
        component: "meta_title",
        _uid: "title-1",
        payload: "Lorem Ipsum Dolor",
      },
      {
        component: "meta_description",
        _uid: "desc-1",
        payload:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        component: "meta_date_published",
        _uid: "date-1",
        payload: "2024-01-15T10:00:00Z",
      },
      {
        component: "meta_tags",
        _uid: "tags-1",
        payload: ["lorem", "ipsum", "dolor"],
      },
      {
        component: "meta_view_transition",
        _uid: "transition-1",
        payload: "post-1",
      },
    ],
  },
  {
    _uid: "post-2",
    full_slug: "blog/consectetur-adipiscing",
    name: "Consectetur Adipiscing",
    published_at: "2024-01-16T11:00:00Z",
    component: "card",
    meta_data_page: [
      {
        component: "meta_title",
        _uid: "title-2",
        payload: "Consectetur Adipiscing",
      },
      {
        component: "meta_description",
        _uid: "desc-2",
        payload:
          "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        component: "meta_date_published",
        _uid: "date-2",
        payload: "2024-01-16T11:00:00Z",
      },
      {
        component: "meta_tags",
        _uid: "tags-2",
        payload: ["consectetur", "adipiscing"],
      },
      {
        component: "meta_view_transition",
        _uid: "transition-2",
        payload: "post-2",
      },
    ],
  },
  {
    _uid: "post-3",
    full_slug: "blog/ut-labore-et-dolore",
    name: "Ut Labore et Dolore",
    published_at: "2024-01-17T12:00:00Z",
    component: "card",
    meta_data_page: [
      {
        component: "meta_title",
        _uid: "title-3",
        payload: "Ut Labore et Dolore",
      },
      {
        component: "meta_description",
        _uid: "desc-3",
        payload:
          "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      },
      {
        component: "meta_date_published",
        _uid: "date-3",
        payload: "2024-01-17T12:00:00Z",
      },
      {
        component: "meta_tags",
        _uid: "tags-3",
        payload: ["labore", "dolore", "magna"],
      },
      {
        component: "meta_view_transition",
        _uid: "transition-3",
        payload: "post-3",
      },
    ],
  },
  {
    _uid: "post-4",
    full_slug: "blog/duis-aute-irure",
    name: "Duis Aute Irure",
    published_at: "2024-01-18T13:00:00Z",
    component: "card",
    meta_data_page: [
      {
        component: "meta_title",
        _uid: "title-4",
        payload: "Duis Aute Irure",
      },
      {
        component: "meta_description",
        _uid: "desc-4",
        payload:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
      },
      {
        component: "meta_date_published",
        _uid: "date-4",
        payload: "2024-01-18T13:00:00Z",
      },
      {
        component: "meta_tags",
        _uid: "tags-4",
        payload: ["duis", "irure", "dolor"],
      },
      {
        component: "meta_view_transition",
        _uid: "transition-4",
        payload: "post-4",
      },
    ],
  },
  {
    _uid: "post-5",
    full_slug: "blog/excepteur-sint-occaecat",
    name: "Excepteur Sint Occaecat",
    published_at: "2024-01-19T14:00:00Z",
    component: "card",
    meta_data_page: [
      {
        component: "meta_title",
        _uid: "title-5",
        payload: "Excepteur Sint Occaecat",
      },
      {
        component: "meta_description",
        _uid: "desc-5",
        payload:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
      },
      {
        component: "meta_date_published",
        _uid: "date-5",
        payload: "2024-01-19T14:00:00Z",
      },
      {
        component: "meta_tags",
        _uid: "tags-5",
        payload: ["excepteur", "occaecat"],
      },
      {
        component: "meta_view_transition",
        _uid: "transition-5",
        payload: "post-5",
      },
    ],
  },
  {
    _uid: "post-6",
    full_slug: "blog/culpa-qui-officia",
    name: "Culpa Qui Officia",
    published_at: "2024-01-20T15:00:00Z",
    component: "card",
    meta_data_page: [
      {
        component: "meta_title",
        _uid: "title-6",
        payload: "Culpa Qui Officia",
      },
      {
        component: "meta_description",
        _uid: "desc-6",
        payload:
          "Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.",
      },
      {
        component: "meta_date_published",
        _uid: "date-6",
        payload: "2024-01-20T15:00:00Z",
      },
      {
        component: "meta_tags",
        _uid: "tags-6",
        payload: ["culpa", "officia", "deserunt"],
      },
      {
        component: "meta_view_transition",
        _uid: "transition-6",
        payload: "post-6",
      },
    ],
  },
]

export const mockTags: TagDatasourceEntry[] = [
  { name: "lorem", value: "lorem" },
  { name: "ipsum", value: "ipsum" },
  { name: "dolor", value: "dolor" },
  { name: "consectetur", value: "consectetur" },
  { name: "adipiscing", value: "adipiscing" },
  { name: "labore", value: "labore" },
  { name: "dolore", value: "dolore" },
  { name: "magna", value: "magna" },
  { name: "duis", value: "duis" },
  { name: "irure", value: "irure" },
  { name: "excepteur", value: "excepteur" },
  { name: "occaecat", value: "occaecat" },
  { name: "culpa", value: "culpa" },
  { name: "officia", value: "officia" },
  { name: "deserunt", value: "deserunt" },
]
