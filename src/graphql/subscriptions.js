/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePoll = /* GraphQL */ `
  subscription OnCreatePoll {
    onCreatePoll {
      id
      name
      questions {
        items {
          id
          title
          pollID
          choices
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePoll = /* GraphQL */ `
  subscription OnUpdatePoll {
    onUpdatePoll {
      id
      name
      questions {
        items {
          id
          title
          pollID
          choices
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePoll = /* GraphQL */ `
  subscription OnDeletePoll {
    onDeletePoll {
      id
      name
      questions {
        items {
          id
          title
          pollID
          choices
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      title
      pollID
      poll {
        id
        name
        questions {
          nextToken
        }
        createdAt
        updatedAt
      }
      answers {
        items {
          id
          questionID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      choices
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      title
      pollID
      poll {
        id
        name
        questions {
          nextToken
        }
        createdAt
        updatedAt
      }
      answers {
        items {
          id
          questionID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      choices
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      title
      pollID
      poll {
        id
        name
        questions {
          nextToken
        }
        createdAt
        updatedAt
      }
      answers {
        items {
          id
          questionID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      choices
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
      id
      questionID
      question {
        id
        title
        pollID
        poll {
          id
          name
          createdAt
          updatedAt
        }
        answers {
          nextToken
        }
        choices
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
      id
      questionID
      question {
        id
        title
        pollID
        poll {
          id
          name
          createdAt
          updatedAt
        }
        answers {
          nextToken
        }
        choices
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
      id
      questionID
      question {
        id
        title
        pollID
        poll {
          id
          name
          createdAt
          updatedAt
        }
        answers {
          nextToken
        }
        choices
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
