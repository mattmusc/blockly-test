export const toolboxConfig = {
  'kind': 'categoryToolbox',
  'contents': [
    {
      'kind': 'category',
      'name': 'Math',
      'contents': [
        {
          'kind': 'block',
          'type': 'math_number'
        },
        {
          'kind': 'block',
          'type': 'math_arithmetic'
        },
        {
          'kind': 'block',
          'type': 'math_single'
        },
        {
          'kind': 'block',
          'type': 'math_constant'
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Text',
      'contents': [
        {
          'kind': 'block',
          'type': 'text'
        },
        {
          'kind': 'block',
          'type': 'text_print'
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Control',
      'contents': [
        {
          'kind': 'block',
          'type': 'controls_if'
        },
        {
          'kind': 'block',
          'type': 'controls_ifelse'
        },
        {
          'kind': 'block',
          'type': 'controls_for'
        },
        {
          'kind': 'block',
          'type': 'controls_forEach'
        },
        {
          'kind': 'block',
          'type': 'controls_flow_statements'
        },
        {
          'kind': 'block',
          'type': 'controls_whileUntil'
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Logic',
      'contents': [

        {
          'kind': 'block',
          'type': 'logic_compare'
        },
        {
          'kind': 'block',
          'type': 'logic_operation'
        },
        {
          'kind': 'block',
          'type': 'logic_boolean'
        },
        {
          'kind': 'block',
          'type': 'logic_negate'
        },
        {
          'kind': 'block',
          'type': 'logic_null'
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Variables',
      'custom': 'VARIABLE',
    },
    {
      'kind': 'category',
      'name': 'Functions',
      'custom': 'PROCEDURE',
    },
    {
      'kind': 'category',
      'name': 'API Calls',
      'contents': [
        {
          'kind': 'block',
          'type': 'call_print_api'
        },
      ]
    },
  ]
}
