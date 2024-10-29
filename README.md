# Question Rotation System

## Overview

The Question Rotation System is designed to efficiently assign and rotate questions for users based on their region or country. The app runs a cron job every Monday at 7:00 PM SGT to manage the assignment of questions within defined cycles. Each cycle lasts for a default duration of 7 days, but this configuration can be updated to accommodate longer durations as needed.

## Architecture

The architecture of the system is built around the concept of cycles and question assignments. Here’s a breakdown of the key components:

- **Cycle Management**: The system maintains multiple cycles. Each cycle has a specific duration during which questions are assigned to users in different regions.

- **Question Assignment**: Questions are assigned based on the user's region. This allows for relevant questions to be delivered according to the geographical context of the users.

- **Cron Scheduler**: A cron job executes at a specified time (7:00 PM SGT every Monday) to initiate the rotation process, ensuring that the transitions between cycles are seamless.

### Configuration

The default duration for all cycles is set to 7 days. If the configuration is updated (e.g., changing it to 14 days), this new setting will be applied universally across all cycles. This flexibility ensures that the system can adapt to changing requirements without extensive modifications.

## Implementation Strategy

### Approach

To implement the system, I created a robust framework for managing cycles and question assignments:

1. **Create Cycles**: The system allows for the creation of cycles that serve as timeframes for question assignments.

2. **Assign Questions**: For each active cycle, different questions are assigned to users based on their region. This means that users from the same region receive the same set of questions during the current cycle.

3. **Rotating Questions**: Once all questions for each region have been exhausted (assigned across cycles), the assignment begins again with the first question that was assigned in the very first cycle. This ensures that questions are continuously delivered without gaps.

4. **Handle Scale**: The solution is designed to accommodate 100,000 daily active users (DAU) and can scale to support millions of global users. The architecture ensures efficient handling of question assignments through optimized database queries, which minimize latency and reduce server load.

5. **API Endpoint**: An endpoint has been implemented to take the user's email as a query parameter and return the questions currently assigned to that user's region for the current cycle. This endpoint serves as a basic test to ensure that questions are correctly assigned based on user location. Note that this is not a full implementation, as authentication has not yet been integrated.

### Assumptions

- The default duration of 7 days is a configurable setting that applies to all cycles.
- When the duration configuration is updated (e.g., to 14 days), the new setting will be reflected across all cycles, ensuring uniformity in question assignment.

## Writeup: Strategy, Pros, and Cons

### Strategy

The primary strategy was to design a simple yet effective architecture that efficiently handles question rotation based on user region and cycle configuration. The use of cycles allows for organized and timely delivery of questions while enabling easy updates to the duration settings.

### Pros

- **Scalability**: The architecture is designed to support a growing user base, ensuring that performance remains optimal as the number of daily active users increases.

- **Flexibility**: The ability to configure the duration of cycles allows for adaptability to changing business needs without significant rework.

- **Regional Relevance**: By assigning different questions based on user region, the system ensures that users receive contextually appropriate questions, enhancing user engagement.

- **Continuous Rotation**: The automatic rotation back to the first question after all questions for each region have been assigned guarantees a seamless user experience without interruptions.

- **Basic Endpoint Implementation**: The API endpoint for returning assigned questions based on user email serves as an initial validation tool, ensuring that the question assignment logic works correctly.

### Cons

- **Complexity of Updates**: While the system is flexible, changing configurations can introduce complexities, particularly if different regions require unique configurations.

- **Dependency on Cron Jobs**: The reliance on cron jobs for cycle management means that any failure in job execution could disrupt the question assignment process, potentially leading to gaps in user engagement.

## Design Choices

- **Use of ORM**: I opted for an Object-Relational Mapping (ORM) framework to manage database interactions, which simplifies data handling and provides an abstraction layer over the database.

- **Modular Design**: The application is structured in a modular way, separating concerns across different components (e.g., controllers, services, repositories), promoting maintainability and ease of testing.

- **Logging and Error Handling**: Comprehensive logging and error handling mechanisms have been implemented to track system performance and quickly address any issues that arise.

## Conclusion

The Question Rotation System effectively meets the requirements for rotating questions based on user regions while being capable of scaling to accommodate millions of users. By employing a cycle-based architecture and leveraging cron jobs for scheduling, the system maintains flexibility and efficiency in question assignments. The automatic rotation back to the first question after all have been assigned enhances user engagement by ensuring continuous content delivery. The implemented endpoint for fetching assigned questions based on user email serves as a useful tool for validating the assignment logic, while future improvements could include integrating robust authentication mechanisms to secure the endpoint.

