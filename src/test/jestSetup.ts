export const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    ...originalModule,
    useScrollToTop: jest.fn(),
    useNavigation: () => {
      return {
        navigate: mockedNavigate,
        goBack: jest.fn(),
      };
    },
  };
});

jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn().mockImplementation(() => Promise.resolve()),
    isVisible: jest.fn().mockResolvedValue(false),
    useHideAnimation: jest.fn().mockReturnValue({
      container: {},
      logo: { source: 0 },
      brand: { source: 0 },
    }),
  };
});
