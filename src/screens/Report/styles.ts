import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';

export const styles = EStyleSheet.create({
  container: {
    with: '100%',
    height: '100%',
    bacgrondColor : THEME.COLORS.BACKGROUND_800_LIGHT,
  },

  header: {
    width: '100%',
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT,
    paddingTop: '4.5rem',
    paddingBottom: '2.18rem',
    paddingHorizontal: '1.56rem',
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  headerTitle: {
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.MD,
    alignSelf: 'center'
  },

  containerMonths: {
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT
  },
  monthButton: {
    width: '7.25rem',
    marginVertical: '0.62rem',
    alignItens: 'center',
    paddingVertical: '0.65rem',
    borderRadius: '1.87rem',

  },
  textMonth: {
    alignSelf: 'center',
    fontSize: '0.87rem',
    fontFamily: THEME.FONT_FAMILY.LIGHT,
  },

  containerSwitch: {
    flexDirection: 'row',
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT,
    paddingTop: '0.87rem',
    paddingBottom: '1.75rem',
    alignItens: 'center',
    justifyContent: 'space-between',
  },
  switchButton: {
    alignItens: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2.5,
    paddingHorizontal: '4.5rem',
    paddingVertical: '0.87rem',
    
  },
  textSwitch: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.LIGHT
  },

  containerStats: {
    backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
    borderRadius: '1.56rem',
    marginBottom: '2.56rem',
    shadowColor: THEME.COLORS.SHADOW_400,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16.00,
    elevation: 12,

  },
  headerStats:{
    flex: 1,
    justifyContent: 'space-between',
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '1.75rem',
    paddingTop: '1.25rem',
    paddingBottom: '0.62rem',
  },
  victoryPie: {
    width: '100%', 
    position: 'relative',
    justifyContent:'center', 
    alignItems: 'center'
  },  containerLabels: {
    paddingBottom: '1.25rem',
    paddingLeft: '1.25rem',
    flex: 1,
    justifyContent: 'space-evenly'
  },
  labelVictoryChartPie: {
    position: 'absolute',
    justifyContent: 'center',
    alignItens: 'center'
  },
  ttleVictoryLabel: {
    textAlign: 'center',
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.TEXT_LIGHT
  },
  valueVictoryLabel: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT_LIGHT,
    fontSize: THEME.FONT_SIZE.SM
  },
  labelContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '0.82rem', 
  },
  labelIndicator: {
    width: '0.75rem',
    height: '0.75rem',
    marginRight: '0.62rem',
    borderRadius: '0.75rem'
  },
  containerLabel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box1: {
    maxWidth: '70%',
    justifyContent: 'space-around',
    alignItens: 'flex-start'
  },
  label: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    marginRight: '1.25rem',
    alignSelf: 'flex-start',
  },
  containerPercentBar: {
    width: '17rem',
    borderRadius: 2,
    flexDirection: 'row',
    backgroundColor: THEME.COLORS.LIGHT_GRAY,
  },
  percentBar: {
    height: 4,
    borderRadius: 2,
    maxWidth: '17rem',
  },
  box2: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '1.75rem',
  },
  InfoAmountValue: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  InfoPercentValue: {
    fontSize: THEME.FONT_SIZE.XM,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
  },
  elementNull: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    alignSelf: 'center',
    paddingTop: '1.25rem'
  },

  resumeContainer: {
    paddingHorizontal: '1.75rem',
    paddingBottom: '1.74rem',
  },
  resumeTitle: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD
  },
  resumeValue: {
    alignSelf: 'flex-end',
    marginTop: '1.62rem',
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    fontSize: THEME.FONT_SIZE.MD
  },
});