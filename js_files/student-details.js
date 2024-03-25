const members = [
    { id: 'member1', name: 'Dewmin', role: 'Student 1' },
    { id: 'member2', name: 'Isuri', role: 'Student 2' },
    { id: 'member3', name: 'Althaf Mohamed', role: 'Student 3' },
    { id: 'member4', name: 'Gajindu', role: 'Student 4' }
  ];
  
  const name = document.getElementById('name');
  const role = document.getElementById('role');
  
  members.forEach(member => {
    const div = document.getElementById(member.id);
    div.addEventListener('mouseover', () => {
      name.textContent = "Name: " +  member.name;
      role.textContent = "Role: "+  member.role;
    });
  });