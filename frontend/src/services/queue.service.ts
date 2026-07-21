export const getQueues = async () => {
  return [
    {
      id: "1",
      hospitalName: "City Hospital",
      department: "General Medicine",
      currentToken: 45,
      avgWaitTime: 20,
    },
    {
      id: "2",
      hospitalName: "Apollo Clinic",
      department: "Dental",
      currentToken: 12,
      avgWaitTime: 10,
    },
  ];
};