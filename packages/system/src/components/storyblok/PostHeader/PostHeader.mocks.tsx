// Mock data for PostHeader component stories

// Sample blog post data
export const mockBlogPost = {
  heading: "Understanding Modern Web Development",
  publishedDate: "2024-11-15T10:30:00.000Z",
}

export const mockTechnicalPost = {
  heading: "Advanced TypeScript Patterns for React Applications",
  publishedDate: "2024-11-10T14:15:00.000Z",
}

export const mockNewsPost = {
  heading: "Latest Updates in Frontend Ecosystem",
  publishedDate: "2024-11-12T09:45:00.000Z",
}

export const mockTutorialPost = {
  heading: "Building Scalable Design Systems: A Step-by-Step Guide",
  publishedDate: "2024-11-08T16:20:00.000Z",
}

export const mockShortPost = {
  heading: "Quick Tips",
  publishedDate: "2024-11-14T11:00:00.000Z",
}

export const mockLongHeadingPost = {
  heading:
    "Comprehensive Guide to Modern Web Development: Best Practices, Performance Optimization, and Scalable Architecture for Enterprise Applications",
  publishedDate: "2024-11-05T13:30:00.000Z",
}

export const mockOldPost = {
  heading: "Legacy Systems Migration",
  publishedDate: "2023-06-15T10:00:00.000Z",
}

export const mockRecentPost = {
  heading: "Breaking: New Framework Announcement",
  publishedDate: "2024-11-16T18:45:00.000Z",
}

// Edge cases
export const mockNoHeading = {
  publishedDate: "2024-11-15T10:30:00.000Z",
}

export const mockNoDate = {
  heading: "Post Without Date",
}

export const mockEmptyHeading = {
  heading: "",
  publishedDate: "2024-11-15T10:30:00.000Z",
}

export const mockEmptyDate = {
  heading: "Post With Empty Date",
  publishedDate: "",
}

export const mockInvalidDate = {
  heading: "Post With Invalid Date",
  publishedDate: "invalid-date-string",
}

// Style variations
export const mockCustomStyles = {
  color: "#2563eb",
  backgroundColor: "#f1f5f9",
  padding: "1rem",
  borderRadius: "0.5rem",
  border: "1px solid #e2e8f0",
}
